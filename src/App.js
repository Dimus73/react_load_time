import './App.css';
import LongLoadPage from "./pages/LongLoadPage/LongLoadPage";
import {memo, Profiler, useEffect, useState} from "react";
import {performanceCallback} from "./pages/LongLoadPage/performanceCallback";
import {Route, Switch, useHistory} from 'react-router-dom'
import ShortLoadPage from "./pages/ShortLoadPage/ShortLoadPage";
import MainPage from "./pages/MainPage/MainPage";
import Menu from "./pages/Menu/Menu";

const useRouteLoadingTime = () => {
    const history = useHistory();
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        // Подписываемся на изменения маршрутов
        const unlisten = history.listen((location, action) => {
            console.log('Route change detected:', location, action);
            // Сохраняем время начала перехода
            setStartTime(Date.now());
        });

        // Отписываемся от изменений при размонтировании компонента
        return () => {
            unlisten();
        };
    }, [history]);

    return startTime;
};

function App() {
    const startTime= useRouteLoadingTime();
  return (
      <div>
          {/*<Profiler id={"LongLoadPage"} onRender={performanceCallback}>*/}
          {/*    <LongLoadPage/>*/}
          {/*</Profiler>*/}
          <Menu/>
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/short" component={ShortLoadPage} />
              <Route path="/long" component={LongLoadPage} />
              <Route path="*" render={() => <div>Page Not Found</div>} />
          </Switch>
      </div>
  );
}

export default memo(App);
