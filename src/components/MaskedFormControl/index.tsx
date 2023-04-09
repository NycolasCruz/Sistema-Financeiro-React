import { IMaskMixin } from "react-imask";
import { Form } from "react-bootstrap";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MaskedFormControl = IMaskMixin(({ inputRef, ...props }: any) => (
	<Form.Control {...props} ref={inputRef} />
));
