import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Chat } from 'app/layout/common/quick-chat/quick-chat.types';

@Injectable({
    providedIn: 'root'
})
export class QuickChatService
{
    private _chat: BehaviorSubject<Chat> = new BehaviorSubject(null);
    private _chats: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>(null);

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
     * Getter for chat
     */
    get chats$(): Observable<Chat[]>
    {
        return this._chats.asObservable();
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
}
