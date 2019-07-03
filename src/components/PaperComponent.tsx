import React from 'react';
// import PaperComponent from './PaperComponent';
import Paper from '@material-ui/core/Paper';
import { thisExpression } from '@babel/types';
import dump from './../dump.json';
// import { array } from 'prop-types';
import { BASE_URL } from './../Utilities/constants';
import '../css/Card.css';
type IChildComponentProps = {
  // myRef: any;
};
class PaperComponent extends React.Component<
  IChildComponentProps,
  {
    movieObjectClicked: {};
    clickedNumber: any;
    right: number;
  }
> {
  constructor(props: any) {
    super(props);
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
        <div className="MovieFooter InsightsCustomPaperFooter">
          {props.data.EventTitle}
        </div>
      </div>
    );
  };
  public _renderTrailerMovieChildren = (): any => {
    let data: any = this.state.movieObjectClicked;
    var res = data.TrailerURL.replace('watch?v=', 'embed/');
    return (
      <div className="movie-trailer" style={{ left: this.state.right * -1 }}>
        <div className="row">
          <div className="col-ld-6">
            <iframe src={res} />
          </div>
          <div className="col-ld-6 FooterText">guarav</div>
        </div>
      </div>
    );
  };
  public _renderMovieTrailer = (): any => {
    return (
      <div className="container-fluid">
        <this._renderTrailerMovieChildren />
      </div>
    );
  };
  public renderPaperComponent: any = () => {
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
  };
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
