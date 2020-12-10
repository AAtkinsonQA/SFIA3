import { create } from 'react-test-renderer';
import Ticket from '../Components/Ticket';

describe(`Ticket render tests`,()=> {
    const props = {key:1,
    id=1,
    title=`Test title`,
    author=`Angelica Charry`,
    description=`There is a problem`,
    timeCreated=`24/09/20T 19:00:00`,
    }

    let componentToTest;

    beforeEach(()=>{
        const TestInstance = create(<Ticket{...props}/>)
    })




})