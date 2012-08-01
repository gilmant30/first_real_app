class UsersController < ApplicationController
  def index
  	
  end

  def show
  	@user = User.find(params[:id])

  	respond_to do |format|
      format.html 
      format.js 
    end
  end

  def new
  	@user = User.new
  end

  def create
  	  @user = User.new(params[:user])  

  	  f = rand(100)
  	  @user.guess = f
  	  @user.game_number = 1
  
    respond_to do |format|  
      if @user.save  
        format.html { redirect_to(@user, :notice => 'User created.') }  
        format.js  
      else  
        format.html { render :action => "new" }  
        format.js  
      end  
    end  
  end
  
end
