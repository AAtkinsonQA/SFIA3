import { create, act } from 'react-test-renderer';
import CreateTicket from '../Components/pages/createTicket';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from '@testing-library/react';

describe(`Form Testing`, () => {
    describe(`onSubmit Tests`, () => {
        // create a fake function
        const mockSubmit = jest.fn();
        const data = "test title";

        it(`should update the title state when the text input is typed in`, () => {
            //arrange, act, assert

            //arrange
            const { container } = render(<CreateTicket submit={mockSubmit} />);
            const titleInput = container.querySelector(`[name="title"]`);
            expect(titleInput.value).toEqual(``);

            // act - simulated typing
            userEvent.type(titleInput, data);

            // assert 
            expect(titleInput.value).toEqual(data);
        });

        it(`should call the handleSubmit() when the submit button is clicked`, () => {
            // arrange
            const { container } = render(<CreateTicket />);
            const titleInput = container.querySelector(`[name="title"]`);
            const submitButton = container.querySelector(`[type="submit"]`);
            const mockHandle = jest.fn();

            // act
            //1. simulated typing
            //2. click button
            userEvent.type(titleInput, data);
            fireEvent.click(submitButton);

            // assert
            // expect(titleInput.value).toBe('');
            expect(mockHandle).toBeCalled();
            // expect(mockSubmit).toHaveBeenCalledWith({ title: data });
        })
    })
})