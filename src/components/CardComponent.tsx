import React from 'react';
// import PaperComponent from './PaperComponent';
import Paper from '@material-ui/core/Paper';
import { thisExpression } from '@babel/types';
// import { CHANCES, TEST_STRING } from './../utilities/constants';
// import { getSodukuTime, randomise, sodukuState } from './../utilities/helper';
// interface IChildComponentProps extends React.Props<any> {
//   zDepth: number;
// }
type IChildComponentProps = {};
// interface PP {
//   zDepth: number;
// }
class CardComponent extends React.Component<IChildComponentProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  public handlePaperClick = (e: any): void => {};
  // public startTimer = (st: number) => {
  //   const t: string = getSodukuTime(st);
  //   this.setState({ time: t });
  // };
  // public componentDidMount = () => {
  //   const startTime: number = new Date().getTime();
  //   const tInterval: any = setInterval(() => this.startTimer(startTime), 1000);
  //   this.setState({ tInterval });
  // };
  // public onKeyDown(e: any) {
  //   if (e.keyCode === 8 && this.state.chancesRemaining >= 0) {
  //     const chancesRemaining: number = this.state.chancesRemaining - 1;
  //     if (this.state.error !== '') {
  //       if (chancesRemaining < 0) {
  //         this.setState({ message: 'Game Over' });
  //         clearInterval(this.state.tInterval);
  //       }
  //       this.setState({ chancesRemaining });
  //     }
  //   }
  // }
  // public handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   str: string
  // ) => {
  //   const newValue: string = e.target.value;
  //   if (
  //     newValue === '' ||
  //     (TEST_STRING.test(newValue) &&
  //       newValue.length === 1 &&
  //       !isNaN(parseInt(newValue, 10)))
  //   ) {
  //     const indexes = str.split('');
  //     const newState = [...this.state.value];
  //     const row = parseInt(indexes[0], 10);
  //     const coloumn = parseInt(indexes[1], 10);
  //     newState[row][coloumn] =
  //       newValue !== '' ? parseInt(e.target.value, 10) : '';
  //     this.setState({ value: newState });
  //     if (newValue === '') {
  //       this.setState({ error: '' });
  //       return false;
  //     }
  //     const sodukuStatusObject: any = sodukuState(newState, row, coloumn);
  //     if (sodukuStatusObject.status === false) {
  //       const postions =
  //         sodukuStatusObject.row + '' + sodukuStatusObject.coloumn;
  //       this.setState({ error: postions });
  //     } else if (
  //       sodukuStatusObject.status === false &&
  //       sodukuStatusObject.completed === true
  //     ) {
  //       this.setState({ error: '' });
  //       clearInterval(this.state.tInterval);
  //     } else {
  //       this.setState({ error: '' });
  //     }
  //   } else {
  //     return false;
  //   }
  // };
  // public renderColoums = (): any => {
  //   // return <React.Fragment>{singleRowObject}</React.Fragment>;
  //   return (
  //     <div className="">
  //       <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
  //         <div />
  //       </div>
  //     </div>
  //   );
  // };
  public _renderChildren = () => {
    return (
      <div>
        <div
          className="image-wrap"
          style={{
            backgroundImage:
              'url(https://in.bmscdn.com/events/moviecard/ET00046165.jpg)'
          }}
        />
        <div className="movie-name">Thugs of hindustan</div>
      </div>
    );
  };
  public renderPaperComponent: any = () => {
    return (
      <div className="row flex-row">
        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
          <Paper
            onClick={e => this.handlePaperClick(e)}
            children={<this._renderChildren />}
            className="InsightsCustomPaper"
          />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
          <Paper
            onClick={e => this.handlePaperClick(e)}
            children={<this._renderChildren />}
            className="InsightsCustomPaper"
          />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
          <Paper
            onClick={e => this.handlePaperClick(e)}
            children={<this._renderChildren />}
            className="InsightsCustomPaper"
          />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
          <Paper
            onClick={e => this.handlePaperClick(e)}
            children={<this._renderChildren />}
            className="InsightsCustomPaper"
          />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
          <Paper
            onClick={e => this.handlePaperClick(e)}
            children={<this._renderChildren />}
            className="InsightsCustomPaper"
          />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
          <Paper
            onClick={e => this.handlePaperClick(e)}
            children={<this._renderChildren />}
            className="InsightsCustomPaper"
          />
        </div>
      </div>
    );
  };
  // public renderTableComponent = (): any => {
  //   const component: any[] = [];
  //   for (let i = 0; i < 9; i++) {
  //     const row = [];
  //     row.push(
  //       <div className="FlexColoumnContainer">
  //         <this.renderColoums i={i} />
  //       </div>
  //     );
  //     component.push(row);
  //   }
  //   return (
  //     <React.Fragment>
  //       <span className="sp">{component}</span>
  //     </React.Fragment>
  //   );
  // };
  public render() {
    return <this.renderPaperComponent />;
  }
}
export default CardComponent;
