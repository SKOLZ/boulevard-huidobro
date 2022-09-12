import { FieldValues } from 'react-hook-form';
import api from '../service/api';

export interface IContactForm {
  name: string;
  email: string;
  message: string;
};

export const sendContact = (formValues: FieldValues) => api.post<IContactForm>(`/e1cd7e50-3157-11ed-8988-6185f597c7d8`, formValues);
