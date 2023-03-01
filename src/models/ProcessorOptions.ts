import { ParseOptions } from '@asyncapi/parser';
import { InterpreterOptions } from '../interpreter/Interpreter';

export interface ProcessorOptions {
  asyncapi?: ParseOptions;
  interpreter?: InterpreterOptions;
}
