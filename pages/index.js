import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    // const mensagem = Designed by Low :D

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    

    //console.log(config.playlists);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
                <Header></Header>
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
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
    background-color: ${({ theme }) =>  theme.backgroundLevel1 };

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .user-info {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
    `;

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${config.bg});
    height: 230px;

`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
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

function TimeLine({searchValue, ...props}) {
    //console.log("Dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map(function (playlistsNames) {
                const videos = props.playlists[playlistsNames];
                //console.log(videos);
                //console.log(playlistsNames);
                return (
                    <section key={playlistsNames}>
                        <h2>{playlistsNames}</h2>
                        <div>
                            
                            {videos.filter((videos) => {
                                const titleNormalized = videos.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized);
                            }).map((videos) => {
                                        return (
                                            <a key={videos.url} href={videos.url}>
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



