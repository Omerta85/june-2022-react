
export default function fly(props){
    let {item} = props

    return(
        <div className={'fly'}>
            <h2>{item.fly_number} - {item.mission_name}</h2>
            <img src={item.links.mission_patch_small}/>
            <ul className={'ul'}>
                <li><b>launch year</b> -- {item.launch_year}</li>
                <li><b>Rocket name</b> -- {item.rocket.rocket_name}</li>
                <li><b>Rocket type</b> -- {item.rocket.rocket_type}</li>
                <li><b>Launch site</b> -- {item.launch_site.site_name_long}</li>

            </ul>

        </div>
    )

}