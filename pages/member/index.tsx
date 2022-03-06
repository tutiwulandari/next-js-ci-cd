import Overview from "../../components/organism/Overview";
import SideBar from "../../components/organism/SideBar";

export default function Member() {
  return (
    <div>
      <section className="overview overflow-auto">
        <SideBar  activeMenu="overview"/>
       <Overview />

      </section>
    </div>
  );
}
