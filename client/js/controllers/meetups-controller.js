app.controller('meetupsController', ['$scope', '$resource',
  ($scope, $resource) => {
    const Meetup = $resource('/api/meetups');

    Meetup.query((results) => {
      $scope.meetups = results;
    })
    $scope.meetups = [
      { name: 'MEAN SF Developers' },
      { name: 'Some other meetups' },
    ];

    $scope.createMeetup = function() {
      const meetup = new Meetup();
      meetup.name  = $scope.meetupName;
      meetup.$save((result) => {
        $scope.meetups.push(result);
        $scope.meetupName = '';
      });
    };
  }
])