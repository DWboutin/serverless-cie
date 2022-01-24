import HttpRequestClient from '../Interfaces/HttpRequestClient'
import CRMModel from '../Interfaces/CRMModel'
import LeadCreationTransformedRawData from '../Interfaces/LeadCreationTransformedRawData'
import CRMUpdateData from '../Interfaces/CRMUpdateData'

class LeadsModel implements CRMModel {
  requestService: HttpRequestClient

  constructor(httpRequestClient: HttpRequestClient) {
    this.requestService = httpRequestClient
  }

  create(data: LeadCreationTransformedRawData) {
    return this.requestService.post({
      url: '/leads',
      data: { data }, // must be contained in { data: { ...values }}
    })
  }

  update(id, data: CRMUpdateData) {
    return this.requestService.put({
      url: `/leads/${id}`,
      data: { data }, // must be contained in { data: { ...values }}
    })
  }

  fetch(id: number) {
    return this.requestService.get({
      url: `/leads/${id}`,
    })
  }

  findAll(queryParams: any) {
    return this.requestService.get({
      url: '/leads',
      params: queryParams,
    })
  }
}

export default LeadsModel
