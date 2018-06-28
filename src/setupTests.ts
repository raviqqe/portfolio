import { configure } from "enzyme";
import Adapter = require("enzyme-adapter-react-16");
import matchMediaMock = require("match-media-mock");

configure({ adapter: new Adapter() });

window.matchMedia = matchMediaMock.create();
(window.matchMedia as any).setConfig({ type: "screen", width: 1200 });
