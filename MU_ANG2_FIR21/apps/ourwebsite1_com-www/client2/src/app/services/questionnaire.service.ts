import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

import { QuestionModel } from '../models/question.model';
import { QuestionAnswerModel } from '../models/questionAnswer.model';
//START: ADDED
import { QuestionnaireListResult } from "./questionnaire-list-result.interface";
import { QuestionsBase } from "./questions.base";
//END: ADDED

@Injectable()
export class QuestionnaireService {

//START: ADDED
//ORIGINAL  questions: QuestionModel[] = QuestionsBase;  // Takes the questions from the static file questions.base.ts

// questions: QuestionModel[] = [
//   new QuestionModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")
// ]; // Make this dynamic, so it get GET from a REST API
//END: ADDED

  private baseUrl: string = 'http://localhost:8001/api';

	requestOptions: RequestOptions = new RequestOptions({
		headers: new Headers({ 'Content-Type': 'application/json' })
	});  

  constructor(private http: Http) { }

//START: ADDED
  // getAllQuestions(): Observable<QuestionModel> {
	// 	return this.http
	// 	  .get(`${this.baseUrl}/questions/?offset=${offset}&limit=${limit}`)
	// 		.map(response => response.json())
	// 		.map(results => this.getList(results));
	// }
//END: ADDED

  getAll(offset: number = 0, limit: number = 2): Observable<QuestionnaireService> {
    return this.http
      .get(`${this.baseUrl}/questions`) // ORIGINAL .get(`${this.baseUrl}/questions/?offset=${offset}&limit=${limit}`)
      .map(response => response.json())
      .map(results => this.getList(results, offset, limit));  // ORIGINAL .map(results => this.getList(results));
  }

  get(questionId: number): Observable<QuestionModel> {
    // ORIGINAL return this.http.get(`${this.baseUrl}/questions/` + encodeURIComponent(questionId.toString())).map(this.extractData).catch(this.handleError);
    return this.http
		  .get(`${this.baseUrl}/questions/` + encodeURIComponent(questionId.toString())) //.map(this.extractData).catch(this.handleError);
			.map(response => response.json())
			.map(result => this.getListItem(result));
  }

  insert(question: QuestionModel): Observable<QuestionModel> {
    return this.http.post(`${this.baseUrl}/questions/`, JSON.stringify(question), this.requestOptions).map(res => res.json()).catch(this.handleError);
  }

  insertAll(questionsAnswers: QuestionAnswerModel[]): Observable<QuestionnaireService> {
		console.log("QuestionnaireService - insertAll, questionsAnswers = ", questionsAnswers);	
    let myJSON = JSON.stringify(questionsAnswers);
		console.log("QuestionnaireService - insertAll, myJSON = ", myJSON);
    return this.http.post(`${this.baseUrl}/questionnaire/`, myJSON, this.requestOptions).map(res => res.json()).catch(this.handleError);
	}

	update(question: QuestionModel): Observable<QuestionModel> {
		return this.http.put(`${this.baseUrl}/questions/` + encodeURIComponent(question.id.toString()),
			JSON.stringify(question), this.requestOptions).map(res => res.json()).catch(this.handleError);	
	}

	delete(questionId: number): Observable<QuestionModel> {
		return this.http.delete(`${this.baseUrl}/questions/` + encodeURIComponent(questionId.toString())).map(res => res.json()).catch(this.handleError);
	}

  getList(data: any, offset: number = 0, limit: number = 2): QuestionnaireService { // ORIGINAL   getList(data): QuestionnaireService {
		console.log("QuestionnaireService - getList, data = ", data, ", offset = ", offset, ", limit = ", limit);
    let result: any = [];
    let count: number = data.length;
		let questions: any = data;
		result['count']=count;
    let page: number; 
		if (offset == 0) {
			 page = 1;
		}	 
		else { 
			 page = (offset / limit) + 1; 
		}
    //console.log("QuestionnaireService - getList, page = ", page, ", offset = ", offset, ", limit = ", limit);
		result['questions'] = questions.slice((page - 1) * limit, page * limit); // PAGINATION LOGIC
		// room for additional filtering
		return result;  // ORIGINAL return data;
	}

  getListItem(data: any): QuestionModel { // ORIGINAL   getList(data): QuestionnaireService {
		console.log("QuestionnaireService - getListItem, data = ", data);
    let result: any = [];
		result = data;
		console.log("QuestionnaireService - getListItem, result = ", result);
		// room for additional filtering
		return result;  // ORIGINAL return data;
	}

//START: ADDED
  // list(search: string = null, page: number = 1, limit: number = 10): Observable<QuestionsListResult<QuestionModel>> {
  //   let questionsResult = this.questions.filter(function(question: QuestionModel) {
  //       return (search) ? question.title.toLowerCase().indexOf(search) !== -1 : true;
  //   });

  //   let questionsResultPage = questionsResult.slice((page - 1) * limit, page * limit);

  //   return Observable.of({totalQuestions: questionsResult.length, questions: questionsResultPage}).delay(100);
  // }

  list(questions: QuestionModel[], search: string = null, page: number = 1, limit: number = 10): Observable<QuestionnaireListResult<QuestionModel>> {
    console.log("QuestionnaireService - list, questions = ", questions);
    console.log("QuestionnaireService - list, search = ", search);
    console.log("QuestionnaireService - list, page = ", page);
    console.log("QuestionnaireService - list, limit = ", limit);						

    let questionsResult = questions.filter(function(question: QuestionModel) {
       return (search) ? question.display.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true;
    });

    let questionsResultPage = questionsResult.slice((page - 1) * limit, page * limit);

    return Observable.of({totalQuestions: questionsResult.length, questions: questionsResultPage}).delay(100);
  }

//END: ADDED

	/**
	 * Pick the array that belongs to the key 'questions'
	 * 
	 * e.g. { questions:[our data is in here] }
	 */
	private extractData(res: Response) {
		let body = res.json();
		console.log("QuestionnaireService extractData, body.questions = ", body.questions);
		return body.questions || {};
	}

	/**
	 * Handle error
	 */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
    	// We'd also dig deeper into the error to get a better message
    	let errMsg = (error.message) ? error.message :
      	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg); // log to console instead
    	return Observable.throw(errMsg);
	}

}
