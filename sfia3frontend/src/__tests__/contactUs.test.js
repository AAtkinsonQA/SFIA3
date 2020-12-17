import ContactUs from '../Components/pages/contactUs';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from '@testing-library/react';

describe(`Form Testing`, () => {
    describe(`onSubmit Tests`, () => {
        // create a fake function
        const mockSubmit = jest.fn();
        const data = "Rohithan";

        it(`should update the title state when the text input is typed in`, () => {
            //arrange, act, assert

            //arrange
            const { container } = render(<ContactUs submit={mockSubmit} />);
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
            const { container } = render(<ContactUs onSubmit={mockHandle}/>);
            const titleInput = container.querySelector(`[name="firstname"]`);
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