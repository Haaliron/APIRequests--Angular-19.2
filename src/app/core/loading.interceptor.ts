import { HttpInterceptorFn } from '@angular/common/http';
import { LOADING } from '../services/card.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loading = req.context.get(LOADING)
  console.log(req);


  return next(req);
};
