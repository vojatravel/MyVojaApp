import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
