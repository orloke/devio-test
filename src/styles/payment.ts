import styled from 'styled-components';

interface PropsInput {
	error: boolean;
}

export const Container = styled.div<PropsInput>`
	max-width: 70%;
	margin: 1rem auto;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 80px - 2rem);
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		text-align: center;
		max-width: 95%;
		min-height: calc(100vh - 128px - 2rem);
	}

	input {
		height: 50px;
		border-radius: 6px;
		padding: 0.5rem;
		border: none;
	}
	input {
		border: ${props => (props.error ? '1px solid red' : '1px solid gray')};
		margin-right: 1rem;
		width: 40%;
		min-width: 200px;
		@media (max-width: 768px) {
			margin: 0;
			margin-bottom: 1rem;
			width: 100%;
		}
	}
`;
