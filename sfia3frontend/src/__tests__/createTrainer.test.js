import CreateTrainer from '../Components/pages/createTrainer.jsx';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from '@testing-library/react';
//test
describe(`Form Testing`, () => {
    describe(`onSubmit Tests`, () => {
        // create a fake function
        const mockSubmit = jest.fn();
        const data = "Jordan";

        it(`should update the title state when the text input is typed in`, () => {
            //arrange, act, assert

            //arrange
            const { container } = render(<CreateTrainer submit={mockSubmit} />);
            const titleInput = container.querySelector(`[name="firstName"]`);
            expect(titleInput.value).toEqual(``);

            // act - simulated typing
            userEvent.type(titleInput, data);

            // assert 
            expect(titleInput.value).toEqual(data);
        });

        it(`should call the handleSubmit() when the submit button is clicked`, () => {
            // arrange
            const mockHandle = jest.fn();
            const { container } = render(<CreateTrainer onSubmit={mockHandle}/>);
            const titleInput = container.querySelector(`[name="firstName"]`);
            const submitButton = container.querySelector(`[type="submit"]`);
            submitButton.onClick= mockHandle();
            // act
            //1. simulated typing
            //2. click button
            fireEvent.click(submitButton);
            // assert
            expect(mockHandle).toBeCalled();
        })
    })
})