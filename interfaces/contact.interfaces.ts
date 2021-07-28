export interface ISendEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface IRestBaseResponse {
  status?: number;
  detail?: string;
  error?: string;
  method?: string;
}
