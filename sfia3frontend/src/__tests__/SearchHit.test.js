import renderer from 'react-test-renderer';
import SearchHit from '../Components/SearchHit';

test("Matches searchhit", () => {
    const hit = renderer.create(<SearchHit/>).toJSON();
    expect(hit).toMatchSnapshot();
})