import renderer from 'react-test-renderer';
import TitleSection from '../Components/TitleSection';


test("Matches title snapshot", () => {
    const title = renderer.create(<TitleSection/>).toJSON();
    expect(title).toMatchSnapshot();
})
