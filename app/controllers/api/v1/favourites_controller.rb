class Api::V1::FavouritesController < Api::V1::BaseController
  
  before_filter :check_auth, :if => Proc.new { |c| c.request.format == 'application/json' }
  load_and_authorize_resource :user
       
  def index
    @favourites=current_user.favourites.find(:all)
  end
  
  def create    
        @favourite = current_user.favourites.new params[:favourite]
        if @favourite.save          
           render :status => 201,
           :json => { :success => true,
                      :info => "Favourite created successfully!",
                      :data => { :id => @favourite.id } }
        else
           render :status => 422,
           :json => { :success => false,
                      :info => @favourite.errors.full_messages.first, 
                      :errors => @favourite.errors.full_messages}
        end    
  end
  
  def show
     @favourite=current_user.favourites.find_by_id(params[:id])
     if !@favourite
           render :status => 404,
           :json => { :success => false,
                      :info => "Favourite doesn't exist!", 
                      :errors => "Favourite doesn't exist!"}   
     end   
  end
  
  def update
    @favourite=current_user.favourites.find_by_id(params[:id])
    if @favourite.update_attributes(params[:favourite])
           render :status => 200,
           :json => { :success => true,
                      :info => "Favourite updated successfully!",
                      :data => { :id => @favourite.id } }
    else
           render :status => 400,
           :json => { :success => false,
                      :info => @favourite.errors.full_messages.first, 
                      :errors => @favourite.errors.full_messages}  
    end
  end
  
  def destroy

    @favourite=current_user.favourites.find_by_id(params[:id])
    if @favourite   
       @favourite.destroy
       render :status => 200,
       :json => { :success => true,
                  :info => "Favourite deleted successfully!",
                  :data => {} }  
    else
    render :status => 404,
     :json => { :success => false,
                :info => "Favourite doesn't exist!", 
                :errors => "Favourite doesn't exist!"}                 
    end           
  end
      
end