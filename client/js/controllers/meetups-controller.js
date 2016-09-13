app.controller('meetupsController', ['$scope', '$resource',
  ($scope, $resource) => {
    $scope.meetups = [
      { name: 'MEAN SF Developers' },
      { name: 'Some other meetups' },
    ];

    $scope.createMeetup = function() {
      $scope.meetups.push({ name: $scope.meetupName });
      $scope.meetupName = '';
    };
  }
])