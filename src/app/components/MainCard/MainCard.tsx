import ProfileCover from "./ProfileCover";
import ProfilePersonalInfos from "./ProfilePersonalInfos";

export default function MainCard(){
    return (
        <>
            <section className="default-card main-card">
                <ProfileCover/>
                <ProfilePersonalInfos/>
            </section>
        </>
    );
}