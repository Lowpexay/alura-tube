import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    // const mensagem = Designed by Low :D
    const estilosHomePage = {
        //backgroundColor: "Red" 
    };

    console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu></Menu>
                <Header></Header>
                <TimeLine playlists={config.playlists}>
                    Conteúdo
                </TimeLine>
            </div>
        </>
    );
}

export default HomePage

//function Menu() {
//    return (
//        <div>
//            Menu
//        </div>
//    )
//}


const StyledHeader = styled.div`
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .user-info {
            margin-top: 50px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
    `;


function Header() {
    return (
        <StyledHeader>
            {/*< img src="banner"></img>*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <h2>
                    {config.name}
                </h2>
                <p>
                    {config.job}
                </p>
            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    //console.log("Dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map(function (playlistsNames) {
                const videos = props.playlists[playlistsNames];
                console.log(videos);
                console.log(playlistsNames);
                return (
                    <section>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {
                                videos.map((videos) => {
                                    return (
                                        <a href={videos.url}>
                                            <img src={videos.thumb}></img>
                                            <span>
                                                {videos.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}



