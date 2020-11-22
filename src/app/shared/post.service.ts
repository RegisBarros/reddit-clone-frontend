import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<PostModel>{
    return this.http.get<PostModel>('http://localhost:4200/api/posts/' + id);
  }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:4200/api/posts');
  }

  getAllPostsByUser(name: string): Observable<Array<PostModel>> {
    return this.http.get<PostModel[]>('http://localhost:4200/api/posts/by-user/' + name);
  }

  createPost(postPayload: CreatePostPayload): Observable<any>  {
    return this.http.post('http://localhost:4200/api/posts', postPayload);
  }
}
