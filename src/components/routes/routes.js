import categories from '../../assets/data/categories.json'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../components/home/home';

function CreateRoutes(props) {
    return (
        <>
            <Route path={props.link}>
                <div className="play-main-container">
                    <div className="play-container">
                        <div className="play-title">
                            {props.description}
                        </div>
                    </div>
                </div>
            </Route>
        </>
    );
}

function QuestionRoutes() {
    const elements = { categories };
    const routes = [];
    for (const [_, data] of elements.categories.items.entries()) {
        routes.push(
            <CreateRoutes description={data.description} link={data.link} />
        )
    }
    return (
        <>
            {routes}
        </>
    );
}



export default QuestionRoutes;