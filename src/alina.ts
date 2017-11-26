export * from "alina-core";
export * from "alina-std";

// Re-export to make typescript happy
import { Alina, AlinaComponent, Document, FuncAlinaComponent} from "alina-std";
export { Alina, AlinaComponent, Document, FuncAlinaComponent };