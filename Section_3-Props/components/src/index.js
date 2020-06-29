import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
// Easier developement. Any information needed for mock data just to display
import faker from 'faker';

const App = () => {

    return (
        <div className="ui container comments">
            {/* Passing props to the child component to use/reference - jsut like passing params
             */}
             <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} comment="Goodjob!" />
             </ApprovalCard>
             <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:30PM" avatar={faker.image.avatar()} comment="How are you?" />
             </ApprovalCard>
             <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 6:00PM" avatar={faker.image.avatar()} comment="I HATE BANANASSS" />
             </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);





// const App = () => {
//     return (
//         <div>
//             <Segment>
//                 <div className="ui icon header">
//                     <i className="pdf file outline icon"></i>
//                     No documents are listed for this customer.
//                 </div>
//                 <div className="ui primary button">Add Document</div>
//             </Segment>
//             <Segment>
//                 <h4 class="ui header">For Your Information</h4>
//                 <p>
//                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
//                 </p>
//             </Segment>
//         </div>
//     );
// }

// const Segment = (props) => {
//     return (
//         <div className="ui placeholder segment">
//             {props.children}
//         </div>
//     )
// };
