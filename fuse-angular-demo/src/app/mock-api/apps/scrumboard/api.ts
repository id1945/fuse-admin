import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { boards as boardsData, cards as cardsData, labels as labelsData, lists as listsData, members as membersData } from 'app/mock-api/apps/scrumboard/data';

@Injectable({
    providedIn: 'root'
})
export class ScrumboardMockApi
{
    // Private
    private _boards: any[] = boardsData;
    private _cards: any[] = cardsData;
    private _labels: any[] = labelsData;
    private _lists: any[] = listsData;
    private _members: any[] = membersData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Boards - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/scrumboard/boards')
            .reply(({request}) => {

                // Clone the boards
                let boards = cloneDeep(this._boards);

                // Go through the boards and inject the members
                boards = boards.map(board => ({
                    ...board,
                    members: board.members.map(boardMember => this._members.find(member => boardMember === member.id))
                }));

                return [
                    200,
                    boards
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Board - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/scrumboard/board')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the board
                const board = this._boards.find(item => item.id === id);

                // Attach the board lists
                board.lists = this._lists.filter(item => item.boardId === id).sort((a, b) => a.position - b.position);

                // Grab all cards that belong to this board and attach labels to them
                let cards = this._cards.filter(item => item.boardId === id);
                cards = cards.map(card => (
                    {
                        ...card,
                        labels: card.labels.map(cardLabelId => this._labels.find(label => label.id === cardLabelId))
                    }
                ));

                // Attach the board cards into corresponding lists
                board.lists.forEach((list, index, array) => {
                    array[index].cards = cards.filter(item => item.boardId === id && item.listId === list.id).sort((a, b) => a.position - b.position);
                });

                // Attach the board labels
                board.labels = this._labels.filter(item => item.boardId === id);

                return [
                    200,
                    cloneDeep(board)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ List - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/scrumboard/board/list')
            .reply(({request}) => {

                // Get the list
                const newList = cloneDeep(request.body.list);

                // Generate a new GUID
                newList.id = FuseMockApiUtils.guid();

                // Store the new list
                this._lists.push(newList);

                return [
                    200,
                    newList
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ List - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/scrumboard/board/list')
            .reply(({request}) => {

                // Get the list
                const list = cloneDeep(request.body.list);

                // Prepare the updated list
                let updatedList = null;

                // Find the list and update it
                this._lists.forEach((item, index, lists) => {

                    if ( item.id === list.id )
                    {
                        // Update the list
                        lists[index] = assign({}, lists[index], list);

                        // Store the updated list
                        updatedList = lists[index];
                    }
                });

                return [
                    200,
                    updatedList
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Lists - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/scrumboard/board/lists')
            .reply(({request}) => {

                // Get the lists
                const lists = cloneDeep(request.body.lists);

                // Prepare the updated lists
                const updatedLists = [];

                // Go through the lists
                lists.forEach((item) => {

                    // Find the list
                    const index = this._lists.findIndex(list => item.id === list.id);

                    // Update the list
                    this._lists[index] = assign({}, this._lists[index], item);

                    // Store in the updated lists
                    updatedLists.push(item);
                });

                return [
                    200,
                    updatedLists
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ List - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/scrumboard/board/list')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the list and delete it
                const index = this._lists.findIndex(item => item.id === id);
                this._lists.splice(index, 1);

                // Filter out the cards that belonged to the list to delete them
                this._cards = this._cards.filter(card => card.listId !== id);

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Card - PUT
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPut('api/apps/scrumboard/board/card')
            .reply(({request}) => {

                // Get the card
                const newCard = cloneDeep(request.body.card);

                // Generate a new GUID
                newCard.id = FuseMockApiUtils.guid();

                // Unshift the new card
                this._cards.push(newCard);

                return [
                    200,
                    newCard
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Card - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/scrumboard/board/card')
            .reply(({request}) => {

                // Get the id and card
                const id = request.body.id;
                const card = cloneDeep(request.body.card);

                // Prepare the updated card
                let updatedCard = null;

                // Go through the labels and leave only ids of them
                card.labels = card.labels.map(itemLabel => itemLabel.id);

                // Find the card and update it
                this._cards.forEach((item, index, cards) => {

                    if ( item.id === id )
                    {
                        // Update the card
                        cards[index] = assign({}, cards[index], card);

                        // Store the updated card
                        updatedCard = cloneDeep(cards[index]);
                    }
                });

                // Attach the labels of the card
                updatedCard.labels = updatedCard.labels.map(cardLabelId => this._labels.find(label => label.id === cardLabelId));

                return [
                    200,
                    updatedCard
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Cards - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/scrumboard/board/cards')
            .reply(({request}) => {

                // Get the cards
                const cards = cloneDeep(request.body.cards);

                // Prepare the updated cards
                const updatedCards = [];

                // Go through the cards
                cards.forEach((item) => {

                    // Find the card
                    const index = this._cards.findIndex(card => item.id === card.id);

                    // Go through the labels and leave only ids of them
                    item.labels = item.labels.map(itemLabel => itemLabel.id);

                    // Update the card
                    this._cards[index] = assign({}, this._cards[index], item);

                    // Attach the labels of the card
                    item.labels = item.labels.map(cardLabelId => this._labels.find(label => label.id === cardLabelId));

                    // Store in the updated cards
                    updatedCards.push(item);
                });

                return [
                    200,
                    updatedCards
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Card - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/scrumboard/board/card')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the card and delete it
                const index = this._cards.findIndex(item => item.id === id);
                this._cards.splice(index, 1);

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Card Positions - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/scrumboard/board/card/positions')
            .reply(({request}) => {

                // Get the cards
                const cards = request.body.cards;

                // Go through the cards
                this._cards.forEach((card) => {

                    // Find this card's index within the cards array that comes with the request
                    // and assign that index as the new position number for the card
                    card.position = cards.findIndex(item => item.id === card.id && item.listId === card.listId && item.boardId === card.boardId);
                });

                // Clone the cards
                const updatedCards = cloneDeep(this._cards);

                return [
                    200,
                    updatedCards
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/scrumboard/board/labels')
            .reply(({request}) => {

                // Get the board id
                const boardId = request.params.get('boardId');

                // Filter the labels
                const labels = this._labels.filter(item => item.boardId === boardId);

                return [
                    200,
                    cloneDeep(labels)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Label - PUT
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPut('api/apps/scrumboard/board/label')
            .reply(({request}) => {

                // Get the label
                const newLabel = cloneDeep(request.body.label);

                // Generate a new GUID
                newLabel.id = FuseMockApiUtils.guid();

                // Unshift the new label
                this._labels.unshift(newLabel);

                return [
                    200,
                    newLabel
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Label - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/scrumboard/board/label')
            .reply(({request}) => {

                // Get the id and label
                const id = request.body.id;
                const label = cloneDeep(request.body.label);

                // Prepare the updated label
                let updatedLabel = null;

                // Find the label and update it
                this._labels.forEach((item, index, labels) => {

                    if ( item.id === id )
                    {
                        // Update the label
                        labels[index] = assign({}, labels[index], label);

                        // Store the updated label
                        updatedLabel = labels[index];
                    }
                });

                return [
                    200,
                    updatedLabel
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Label - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/scrumboard/board/label')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the label and delete it
                const index = this._labels.findIndex(item => item.id === id);
                this._labels.splice(index, 1);

                // Get the cards that have the label
                const cardsWithLabel = this._cards.filter(card => card.labels.indexOf(id) > -1);

                // Iterate through them and remove the label
                cardsWithLabel.forEach((card) => {
                    card.tags.splice(card.tags.indexOf(id), 1);
                });

                return [
                    200,
                    true
                ];
            });
    }
}
