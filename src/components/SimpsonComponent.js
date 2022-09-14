export default function SimpsonComponent(props) {
    let{name,pic} = props;

    return (
        <div className={'simpsonBlock'}>
                <h2>{name}</h2>
                <img src={pic}/>
        </div>
    );
}