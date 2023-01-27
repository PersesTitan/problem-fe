import ProblemForm from "./ProblemForm";
import ProblemInfoList from "./ProblemInfoList";
import CreateTool from "./tool/CreateTool";

class Create extends CreateTool {
    render() {
        const information = this.state.information;

        return (
            <div>
                <ProblemForm data={information} onCreate={this.onCreate} getSize={this.getSize}
                             makeTR={this.makeTR} makeItem={this.makeItem}/>
                <ProblemInfoList data={information} onRemove={this.onRemove} onUpdate={this.onUpdate}
                                 makeTR={this.makeTR} makeItem={this.makeItem}/>
            </div>
        );
    }
}

export default Create;