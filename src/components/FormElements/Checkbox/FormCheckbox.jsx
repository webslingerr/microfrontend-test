import { Checkbox } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

const FormCheckbox = ({
	control,
	required = false,
	name,
	inputProps = {},
	disabled = false,
	inputLeftElement,
	defaultValue = false,
	children,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={{ required }}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<Checkbox
					isInvalid={error}
					onChange={onChange}
					isChecked={value}
					{...props}
				>
					{children}
				</Checkbox>
			)}
		/>
	);
};

export default FormCheckbox;
