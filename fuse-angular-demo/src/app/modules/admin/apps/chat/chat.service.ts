import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { Chat, Contact, Profile } from 'app/modules/admin/apps/chat/chat.types';

@Injectable({
    providedIn: 'root'
})
export class ChatService
{
    private _chat: BehaviorSubject<Chat> = new BehaviorSubject(null);
    private _chats: BehaviorSubject<Chat[]> = new BehaviorSubject(null);
    private _contact: BehaviorSubject<Contact> = new BehaviorSubject(null);
    private _contacts: BehaviorSubject<Contact[]> = new BehaviorSubject(null);
    private _profile: BehaviorSubject<Profile> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for chat
     */
    get chat$(): Observable<Chat>
    {
        return this._chat.asObservable();
    }

    /**
     * Getter for chats
     */
    get chats$(): Observable<Chat[]>
    {
        return this._chats.asObservable();
    }

    /**
     * Getter for contact
     */
    get contact$(): Observable<Contact>
    {
        return this._contact.asObservable();
    }

    /**
     * Getter for contacts
     */
    get contacts$(): Observable<Contact[]>
    {
        return this._contacts.asObservable();
    }

    /**
     * Getter for profile
     */
    get profile$(): Observable<Profile>
    {
        return this._profile.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get chats
     */
    getChats(): Observable<any>
    {
        return this._httpClient.get<Chat[]>('api/apps/chat/chats').pipe(
            tap((response: Chat[]) => {
                this._chats.next(response);
            })
        );
    }

    /**
     * Get contact
     *
     * @param id
     */
    getContact(id: string): Observable<any>
    {
        return this._httpClient.get<Contact>('api/apps/chat/contacts', {params: {id}}).pipe(
            tap((response: Contact) => {
                this._contact.next(response);
            })
        );
    }

    /**
     * Get contacts
     */
    getContacts(): Observable<any>
    {
        return this._httpClient.get<Contact[]>('api/apps/chat/contacts').pipe(
            tap((response: Contact[]) => {
                this._contacts.next(response);
            })
        );
    }

    /**
     * Get profile
     */
    getProfile(): Observable<any>
    {
        return this._httpClient.get<Profile>('api/apps/chat/profile').pipe(
            tap((response: Profile) => {
                this._profile.next(response);
            })
        );
    }

    /**
     * Get chat
     *
     * @param id
     */
    getChatById(id: string): Observable<any>
    {
        return this._httpClient.get<Chat>('api/apps/chat/chat', {params: {id}}).pipe(
            map((chat) => {

                // Update the chat
                this._chat.next(chat);

                // Return the chat
                return chat;
            }),
            switchMap((chat) => {

                if ( !chat )
                {
                    return throwError('Could not found chat with id of ' + id + '!');
                }

                return of(chat);
            })
        );
    }

    /**
     * Update chat
     *
     * @param id
     * @param chat
     */
    updateChat(id: string, chat: Chat): Observable<Chat>
    {
        return this.chats$.pipe(
            take(1),
            switchMap(chats => this._httpClient.patch<Chat>('api/apps/chat/chat', {
                id,
                chat
            }).pipe(
                map((updatedChat) => {

                    // Find the index of the updated chat
                    const index = chats.findIndex(item => item.id === id);

                    // Update the chat
                    chats[index] = updatedChat;

                    // Update the chats
                    this._chats.next(chats);

                    // Return the updated contact
                    return updatedChat;
                }),
                switchMap(updatedChat => this.chat$.pipe(
                    take(1),
                    filter(item => item && item.id === id),
                    tap(() => {

                        // Update the chat if it's selected
                        this._chat.next(updatedChat);

                        // Return the updated chat
                        return updatedChat;
                    })
                ))
            ))
        );
    }

    /**
     * Reset the selected chat
     */
    resetChat(): void
    {
        this._chat.next(null);
    }
}
