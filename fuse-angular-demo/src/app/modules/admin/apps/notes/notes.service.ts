import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, concat, Observable, of, throwError } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Label, Note, Task } from 'app/modules/admin/apps/notes/notes.types';
import { cloneDeep } from 'lodash-es';

@Injectable({
    providedIn: 'root'
})
export class NotesService
{
    // Private
    private _labels: BehaviorSubject<Label[] | null> = new BehaviorSubject(null);
    private _note: BehaviorSubject<Note | null> = new BehaviorSubject(null);
    private _notes: BehaviorSubject<Note[] | null> = new BehaviorSubject(null);

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
     * Getter for labels
     */
    get labels$(): Observable<Label[]>
    {
        return this._labels.asObservable();
    }

    /**
     * Getter for notes
     */
    get notes$(): Observable<Note[]>
    {
        return this._notes.asObservable();
    }

    /**
     * Getter for note
     */
    get note$(): Observable<Note>
    {
        return this._note.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get labels
     */
    getLabels(): Observable<Label[]>
    {
        return this._httpClient.get<Label[]>('api/apps/notes/labels').pipe(
            tap((response: Label[]) => {
                this._labels.next(response);
            })
        );
    }

    /**
     * Add label
     *
     * @param title
     */
    addLabel(title: string): Observable<Label[]>
    {
        return this._httpClient.post<Label[]>('api/apps/notes/labels', {title}).pipe(
            tap((labels) => {

                // Update the labels
                this._labels.next(labels);
            })
        );
    }

    /**
     * Update label
     *
     * @param label
     */
    updateLabel(label: Label): Observable<Label[]>
    {
        return this._httpClient.patch<Label[]>('api/apps/notes/labels', {label}).pipe(
            tap((labels) => {

                // Update the notes
                this.getNotes().subscribe();

                // Update the labels
                this._labels.next(labels);
            })
        );
    }

    /**
     * Delete a label
     *
     * @param id
     */
    deleteLabel(id: string): Observable<Label[]>
    {
        return this._httpClient.delete<Label[]>('api/apps/notes/labels', {params: {id}}).pipe(
            tap((labels) => {

                // Update the notes
                this.getNotes().subscribe();

                // Update the labels
                this._labels.next(labels);
            })
        );
    }

    /**
     * Get notes
     */
    getNotes(): Observable<Note[]>
    {
        return this._httpClient.get<Note[]>('api/apps/notes/all').pipe(
            tap((response: Note[]) => {
                this._notes.next(response);
            })
        );
    }

    /**
     * Get note by id
     */
    getNoteById(id: string): Observable<Note>
    {
        return this._notes.pipe(
            take(1),
            map((notes) => {

                // Find within the folders and files
                const note = notes.find(value => value.id === id) || null;

                // Update the note
                this._note.next(note);

                // Return the note
                return note;
            }),
            switchMap((note) => {

                if ( !note )
                {
                    return throwError('Could not found the note with id of ' + id + '!');
                }

                return of(note);
            })
        );
    }

    /**
     * Add task to the given note
     *
     * @param note
     * @param task
     */
    addTask(note: Note, task: string): Observable<Note>
    {
        return this._httpClient.post<Note>('api/apps/notes/tasks', {
            note,
            task
        }).pipe(switchMap(() => this.getNotes().pipe(
            switchMap(() => this.getNoteById(note.id))
        )));
    }

    /**
     * Create note
     *
     * @param note
     */
    createNote(note: Note): Observable<Note>
    {
        return this._httpClient.post<Note>('api/apps/notes', {note}).pipe(
            switchMap(response => this.getNotes().pipe(
                switchMap(() => this.getNoteById(response.id).pipe(
                    map(() => response)
                ))
            )));
    }

    /**
     * Update the note
     *
     * @param note
     */
    updateNote(note: Note): Observable<Note>
    {
        // Clone the note to prevent accidental reference based updates
        const updatedNote = cloneDeep(note) as any;

        // Before sending the note to the server, handle the labels
        if ( updatedNote.labels.length )
        {
            updatedNote.labels = updatedNote.labels.map(label => label.id);
        }

        return this._httpClient.patch<Note>('api/apps/notes', {updatedNote}).pipe(
            tap((response) => {

                // Update the notes
                this.getNotes().subscribe();
            })
        );
    }

    /**
     * Delete the note
     *
     * @param note
     */
    deleteNote(note: Note): Observable<boolean>
    {
        return this._httpClient.delete<boolean>('api/apps/notes', {params: {id: note.id}}).pipe(
            map((isDeleted: boolean) => {

                // Update the notes
                this.getNotes().subscribe();

                // Return the deleted status
                return isDeleted;
            })
        );
    }
}
