
import {render, screen, configure, fireEvent} from '@testing-library/react';
import App from '../App';
import Button from './Button';
import userEvent from '@testing-library/user-event';


describe('Button Test', () => {
    test('should have button in DoM', () => {
        render(<Button>Toggle</Button>)
        const button = screen.getByText('Toggle')
        
        expect(button).toBeInTheDocument()
    });
    test('should have button with text Toggle in App.js', () => {
        render(<App></App>)
        const button = screen.getByTestId('cButton')
        
        expect(button).toBeInTheDocument()
    });

    test('should render empty button', () => {
        render(<Button>Toggle</Button>);
        let button = screen.getByTestId("cButton");
        expect(button).not.toBeEmptyDOMElement();
        // without children that is toggle here it will give empty
 
    });

    it('should change theme', () => {
        render(<App></App>)
        let h3 = screen.getByText("Current theme is light")
        expect(h3).toHaveTextContent("light")

        let themeButton = screen.getByTestId("cButton");
        userEvent.click(themeButton);
        // fireEvent.click(themeButton)
        expect(h3).toHaveTextContent("dark")
    });

    it('should call the given function ', () => {
        
        const mockfn = jest.fn();

        render(<Button clickHandler={mockfn}></Button>)

        const btn = screen.getByTestId('cButton');
        

        // jus checking if function is called or not on clicking the button

        fireEvent.click(btn);
        // expect(mockfn).toBeCalled();
        // or
        expect(mockfn).toBeCalledTimes(1);

    });

});