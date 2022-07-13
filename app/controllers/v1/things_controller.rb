class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-thing',
        guid: '435-234-3-423-5'
      }
    ] }.to_json
  end
end
