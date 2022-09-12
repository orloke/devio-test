export const formatValue = (value: number) => {
	try {
		const newValue = value.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});
		return newValue;
	} catch (error) {
		return value;
	}
};
