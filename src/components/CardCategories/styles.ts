import styled from 'styled-components';

export const Cards = styled.div`
	position: relative;
	width: 150px;
	height: 170px;
	border-radius: 10px;
	box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	@media (max-width: 768px) {
		margin: auto;
	}
	p {
		font-weight: bold;
		font-size: 1.4rem;
	}
`;
