import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";
import Characters from "./components/RickAndMorty/charters/Characters";

function App() {

    return (<div className={'wrap'}>
        <div className={"simpsons"}>
            <SimpsonComponent name={'Bart'} pic={'https://images.vectorhq.com/images/previews/49b/bart-simpson-psd-450102.png'}/>
            <SimpsonComponent name={'Homer'} pic={'https://i.pinimg.com/564x/ef/ea/19/efea19854801e1d60f3638ebd28c0000.jpg'}/>
            <SimpsonComponent name={'Marge'} pic={'https://e7.pngegg.com/pngimages/544/445/png-clipart-marge-simpson-catwoman-batman-homer-simpson-bart-simpson-catwoman-fictional-characters-fictional-character.png'}/>
            <SimpsonComponent name={'Lisa'} pic={'https://i.discogs.com/OPJi6KYITGiuDluSA5S_zgw4-3Leb1z5HFeqS6uV_3o/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTU4MTMz/Ny0xMzM1NzE4Mjcz/LnBuZw.jpeg'}/>
            <SimpsonComponent name={'Meggi'} pic={'https://i.pinimg.com/564x/0a/ee/e2/0aeee29659d4e437f351bed173ef4bf8.jpg'}/>
        </div>
        <div className={'Name'}>Rick & Morty</div>


        <div className={'rickMorti'}>
            {<Characters/>}
        </div>
    </div>);
}

export default App;
