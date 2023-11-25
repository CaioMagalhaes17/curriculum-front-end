import ProfileCover from "./ProfileCover";
import ProfilePersonalInfos from "./ProfilePersonalInfos";

export default function MainCard(){
    return (
        <>
            <section className="main-board">
                <ProfileCover/>
                <ProfilePersonalInfos/>
            </section>
        </>
    );
}