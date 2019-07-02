import React from 'react';
// import PaperComponent from './PaperComponent';
import Paper from '@material-ui/core/Paper';
import { thisExpression } from '@babel/types';
import dump from './../dump.json';
import { array } from 'prop-types';
import { BASE_URL } from './../Utilities/constants';
// import { CHANCES, TEST_STRING } from './../utilities/constants';
// import { getSodukuTime, randomise, sodukuState } from './../utilities/helper';
// interface IChildComponentProps extends React.Props<any> {
//   zDepth: number;
// }
type IChildComponentProps = {
  // myRef: any;
};
// interface PP {
//   zDepth: number;
// }
class PaperComponent extends React.Component<
  IChildComponentProps,
  {
    movieObjectClicked: {};
    clickedNumber: any;
    right: number;
  }
> {
  // console.log('myRef',myRef);
  constructor(props: any) {
    super(props);
    // this.myRef = ;
    this.state = {
      movieObjectClicked: {},
      clickedNumber: null,
      right: 0
    };
  }
  public handlePaperClick = (
    e: any,
    data: any,
    clickedNumber: string
  ): void => {
    let rect: any = e.currentTarget.getBoundingClientRect();
    console.log(
      'this papper clickedddd',
      rect.top,
      rect.right,
      rect.bottom,
      rect.left
    );
    console.log('this papper clicked', e.currentTarget);

    this.setState({
      movieObjectClicked: data,
      clickedNumber: clickedNumber,
      right: rect.left
    });
  };
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
  public _renderChildren = (props: any): any => {
    console.log('retrieving', props);
    // ${BASE_URL}${props.data.EventImageCode}.jpg
    return (
      <div>
        <div
          className="image-wrap"
          style={{
            backgroundImage: `url(${BASE_URL}${props.data.EventImageCode}.jpg`
          }}
        />
        <div className="movie-name">{props.data.EventTitle}</div>
      </div>
    );
  };
  public _renderMovieTrailer = (): any => {
    let data: any = this.state.movieObjectClicked;
    var res = data.TrailerURL.replace('watch?v=', 'embed/');
    // let v='
    return (
      <div className="container-fluid">
        <div className="movie-trailer" style={{ left: this.state.right * -1 }}>
          <div className="row">
            <div className="col-ld-6">
              <iframe width="620" height="345" src={res} />
            </div>
            <div className="col-ld-6">guarav</div>
          </div>
        </div>
      </div>
    );
  };
  public renderPaperComponent: any = () => {
    // const node = myRef;
    // console.log('efefefe', node);
    // {this.state.clickedNumber == i ? <this._renderMovieTrailer /> : null}
    // let myRef: any = React.createRef<HTMLDivElement>();
    // console.log(myRef.current);
    let arr = [];
    let da: any = dump[1];
    let count = 0;
    for (let i in da) {
      arr.push(
        <>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
            <Paper
              onClick={e => this.handlePaperClick(e, da[i], i)}
              children={<this._renderChildren data={da[i]} item={count++} />}
              className="InsightsCustomPaper"
            />
            {this.state.clickedNumber == i ? (
              <this._renderMovieTrailer />
            ) : null}
          </div>
        </>
      );
    }
    return arr;
    // return (
    //   <div className="row flex-row">
    //     {dump[1].map(key => {
    //       return (
    //         <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
    //           <Paper
    //             onClick={e => this.handlePaperClick(e)}
    //             children={<this._renderChildren />}
    //             className="InsightsCustomPaper"
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
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
    console.log('fefef', dump);
    return (
      <div className="row flex-row">
        <this.renderPaperComponent />
      </div>
    );
  }
}
export default PaperComponent;
