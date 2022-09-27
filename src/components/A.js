import B from "./B";

export default function A({drill}) {
    return (
        <div>
            A Component
            <B drill={drill}/>

        </div>
    );
}