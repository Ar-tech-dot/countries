import { useSelector, TypedUseSelectorHook } from "react-redux/es/exports";
import { RootState } from "@/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
