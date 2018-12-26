class Api::WinesController < ApplicationController

  before_action :set_wine, only: [:show, :update, :destroy]

  def index
    render json: Wine.all
  end

  def create
    wine = Wine.new(wine_params)
    if wine.save
      render json: wine
    else
      render json: { message: wine.errors }, status: 400
    end
  end

  def show
    render json: @wine
  end

  def update
    if @wine.update(wine_params)
      render json: @wine
    else
      render json: { message: @wine.errors }, status: 400
    end
  end

  def destroy
    if @wine.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this wine" }, status: 400
    end
  end

  private

    def set_wine
      @wine = Wine.find_by(id: params[:id])
    end

    def wine_params
      params.require(:wine).permit(:name, :year, :price, :img_url)
    end

end
