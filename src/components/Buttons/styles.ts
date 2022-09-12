import styled from 'styled-components';

interface props {
	variant?: string;
	ml?: number;
}

export const DivButton = styled.button<props>`
	border: 1px solid green;
	margin-left: ${props => props.ml}%;
	padding: 0.7rem 2rem;
	border-radius: 20px;
	background-color: ${props =>
		props.variant === 'outline' ? 'white' : 'green'};
	font-size: 1.2rem;
	color: ${props => (props.variant === 'outline' ? 'green' : 'white')};
	font-weight: bold;
	transition: transform 0.2s ease-out;
	&:hover {
		background-color: ${props =>
			props.variant === 'outline' ? 'green' : 'white'};
		color: ${props => (props.variant === 'outline' ? 'white' : 'green')};
	}
	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0;
	}
`;
