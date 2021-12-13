import { SpriteAnimator } from 'react-sprite-animator';
import React from 'react';

function ProfileSprite() {


    

    return (
          <div className="profile-sprite">
            <SpriteAnimator sprite="../images/atom-sprite-sheet.png"
            width={100}
            height={100} />
          </div>
    );
  }
  
  export default ProfileSprite;