import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

import { QuestionnaireModel } from '../models/questionnaire.model';
import { QuestionAnswerModel } from '../models/questionAnswer.model';
import { QuestionnairesListResult } from "./questionnaires-list-result.interface";

@Injectable()
export class QuestionnairesService {

  private baseUrl: string = 'http://localhost:8001/api';
	private tempUrl: string = 'http://localhost:8002/api';

	requestOptions: RequestOptions = new RequestOptions({
		headers: new Headers({ 'Content-Type': 'application/json' })
	});  

  constructor(private http: Http) { }

  getAll(offset: number = 0, limit: number = 2): Observable<QuestionnairesService> {
    return this.http
      .get(`${this.baseUrl}/questionnaires`)
      .map(response => response.json())
      .map(results => this.getList(results, offset, limit));
  }

  get(questionnaireId: number): Observable<QuestionnaireModel> {
    return this.http
		  .get(`${this.baseUrl}/questionnaires/` + encodeURIComponent(questionnaireId.toString()))
			.map(response => response.json())
			.map(result => this.getListItem(result));
  }

  insert(questionnaire: QuestionnaireModel): Observable<QuestionnaireModel> {
    return this.http.post(`${this.baseUrl}/questionnaires/`, JSON.stringify(questionnaire), this.requestOptions).map(res => res.json()).catch(this.handleError);
  }

  insertAll(questionsAnswers: QuestionAnswerModel[]): Observable<QuestionnairesService> {
		console.log("QuestionnairesService - insertAll, questionsAnswers = ", questionsAnswers);	
    let myJSON = JSON.stringify(questionsAnswers);
		console.log("QuestionnairesService - insertAll, myJSON = ", myJSON);
    //return this.http.post(`${this.baseUrl}/questionnaire/`, myJSON, this.requestOptions).map(res => res.json()).catch(this.handleError);
    return this.http.post(`${this.tempUrl}/questionnaire/`, myJSON, this.requestOptions).map(res => res.json()).catch(this.handleError);
	}

	update(questionnaire: QuestionnaireModel): Observable<QuestionnaireModel> {
		return this.http.put(`${this.baseUrl}/questionnaires/` + encodeURIComponent(questionnaire.id.toString()),
			JSON.stringify(questionnaire), this.requestOptions).map(res => res.json()).catch(this.handleError);	
	}

	delete(questionnaireId: number): Observable<QuestionnaireModel> {
		return this.http.delete(`${this.baseUrl}/questionnaires/` + encodeURIComponent(questionnaireId.toString())).map(res => res.json()).catch(this.handleError);
	}

  getList(data: any, offset: number = 0, limit: number = 2): QuestionnairesService {
		console.log("QuestionnairesService - getList, data = ", data, ", offset = ", offset, ", limit = ", limit);
    let result: any = [];
    let count: number = data.length;
		let questionnaires: any = data;
		result['count']=count;
    let page: number; 
		if (offset == 0) {
			 page = 1;
		}	 
		else { 
			 page = (offset / limit) + 1; 
		}
		result['questionnaires'] = questionnaires.slice((page - 1) * limit, page * limit);
		// room for additional filtering
		return result;
	}

  getListItem(data: any): QuestionnaireModel {
		console.log("QuestionnairesService - getListItem, data = ", data);
    let result: any = [];
		result = data;
		console.log("QuestionnairesService - getListItem, result = ", result);
		// room for additional filtering
		return result;
	}

  list(questionnaires: QuestionnaireModel[], search: string = null, page: number = 1, limit: number = 10): Observable<QuestionnairesListResult<QuestionnaireModel>> {
    console.log("QuestionnairesService - list, questionnaires = ", questionnaires);
    console.log("QuestionnairesService - list, search = ", search);
    console.log("QuestionnairesService - list, page = ", page);
    console.log("QuestionnairesService - list, limit = ", limit);						

    let questionnairesResult = questionnaires.filter(function(questionnaire: QuestionnaireModel) {
       //return (search) ? questionnaire.display.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true;
    });

    let questionnairesResultPage = questionnairesResult.slice((page - 1) * limit, page * limit);

    return Observable.of({totalQuestionnaires: questionnairesResult.length, questionnaires: questionnairesResultPage}).delay(100);
  }

	/**
	 * Pick the array that belongs to the key 'questionnaires'
	 * 
	 * e.g. { questionnaires:[our data is in here] }
	 */
	private extractData(res: Response) {
		let body = res.json();
		console.log("QuestionnairesService extractData, body.questionnaires = ", body.questionnaires);
		return body.questionnaires || {};
	}

	/**
	 * Handle error
	 */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
	}

}
