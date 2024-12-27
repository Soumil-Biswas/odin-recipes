import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function LightMode(){

    const defaultTheme = (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
    ?   false
    :   (localStorage.getItem("lightMode") || true)

    const [lightMode, setLightMode] = useState(defaultTheme);

    useEffect(()=>{
        if(lightMode) {
            localStorage.setItem("lightMode", "true");
            document.documentElement.setAttribute("data-theme", "light");
        }
        else {
            localStorage.setItem("lightMode", "false");
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, [lightMode]);

    return (
        <div className="toggle-theme-wrapper">
          <label className="toggle-theme block" htmlFor="checkbox">
            <input
            className="hidden"
              type="checkbox"
              id="checkbox"
              onChange={() => (setLightMode(!lightMode))}
              defaultChecked={lightMode}
            />
            {/* <span className="text-3xl duration-300">{lightMode? "☀️" : "🌒"}</span> */}
            <span className="text-3xl transition-all duration-300 ease-in-out text-[--contrast-color] hover:text-[--highlight-color-offset] cursor-pointer">{lightMode? <BiMoon /> : <BiSun />}</span>
          </label>
        </div>
    );
}