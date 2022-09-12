import styled from 'styled-components';

export const Container = styled.div`
	margin-bottom: 1rem;
	border: 1px solid #cfcfcf;
	padding: 0.5rem;
	border-radius: 10px;
	.detailsObservation {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.imageDetails {
		display: flex;
	}
`;

export const DivDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		font-size: 0.9rem;
	}

	h5 {
		margin: 0;
		font-size: 1rem;
	}
`;
